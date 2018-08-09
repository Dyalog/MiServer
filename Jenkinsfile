def DockerApp

node ('Docker') {
        stage ('Checkout') {
                checkout scm
        }
        withDockerRegistry([credentialsId: '99ec6d6e-d2f6-4af6-9bbc-3ee43e321123', url: 'http://registry.dyalog.com:5000']) {
                stage ('Build Docker Image') {
                        // Create a version file to include in the container
                        sh 'echo "$(cat version).$(git rev-list HEAD --count) - ($(git rev-parse HEAD))" > ./MiServer.version'
                        DockerApp = docker.build 'registry.dyalog.com:5000/dyalog/miserver:latest'
                }
                stage ('Test website') {


                        def MiServer = DockerApp.run ('-e VIRTUAL_HOST=miserver.dyalog.bramley -e VIRTUAL_PORT=8080')
                        try {
				//Get the IP of the container
				def DOCKER_IP = sh (
					script: "docker inspect ${MiServer.id} | jq .[0].NetworkSettings.IPAddress | sed 's/\"//g'",
					returnStdout: true
				).trim()
                                sh "for F in `ls ${WORKSPACE}/CI/test-*.sh`; do /bin/bash \${F} ${DOCKER_IP}; done"
//${WORKSPACE}/CI/test-pages.sh ${DOCKER_IP}"
                                MiServer.stop()
                        } catch (Exception e) {
                                println 'MiServer Not running correctly; cleaning up.'
                                sh "git rev-parse --short HEAD > .git/commit-id"
                                 withCredentials([string(credentialsId: '7ac3a2c6-484c-4879-ac85-2b0db71a7e58', variable: 'GHTOKEN')]) {
                                         commit_id = readFile('.git/commit-id')
                                         sh "${WORKSPACE}/CI/GH-Comment.sh ${MiServer.id} ${commit_id}"
                                 }
                                MiServer.stop()
                                sh "docker rmi registry.dyalog.com:5000/dyalog/miserver:latest"
                                throw e;
                        }
                }
                stage ('Publish Docker image') {
                        if (env.BRANCH_NAME.contains('master')) {
                                sh 'docker push registry.dyalog.com:5000/dyalog/miserver:latest'
                        }
                        if (env.BRANCH_NAME.contains('miserver.dyalog.com')) {
                                sh 'docker tag registry.dyalog.com:5000/dyalog/miserver:latest registry.dyalog.com:5000/dyalog/miserver:live'
                                sh 'docker push registry.dyalog.com:5000/dyalog/miserver:live'
                        }

                }
        }


        if (env.BRANCH_NAME.contains('miserver.dyalog.com')) {
                withCredentials([usernamePassword(credentialsId: '200ba378-df02-4e67-9b18-afd73aeb29e8', passwordVariable: 'SECRETKEY', usernameVariable: 'ACCESSKEY')]) {
                        stage('Deploying with Rancher') {
                                sh '/usr/local/bin/rancher-compose --access-key $ACCESSKEY --secret-key $SECRETKEY --url http://rancher.dyalog.com:8080/v2-beta/projects/1a5/stacks/1st3 -p MiServer up --force-upgrade --confirm-upgrade --pull -d'
                        }
                }
        }

        stage ('Cleanup') {
                        if (env.BRANCH_NAME.contains('miserver.dyalog.com')) {
                                sh 'docker rmi registry.dyalog.com:5000/dyalog/miserver:live'
                        }
                        sh 'docker rmi registry.dyalog.com:5000/dyalog/miserver:latest'
        }
	
	stage ('Github Upload') {
		withCredentials([string(credentialsId: '7ac3a2c6-484c-4879-ac85-2b0db71a7e58', variable: 'GHTOKEN')]) {
			sh './CI/GH-Release.sh'
		}

        }


}

