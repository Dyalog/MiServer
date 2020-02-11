def DockerApp

node ('Docker') {
        stage ('Checkout') {
                checkout scm
        }
        stage ('Build Docker Image') {
                // Create a version file to include in the container
                sh 'echo "$(cat version).$(git rev-list HEAD --count) - ($(git rev-parse HEAD))" > ./MiServer.version'
                DockerApp = docker.build 'dyalog/miserver:latest'
        }
        stage ('Test website') {


                def MiServer = DockerApp.run ('-t -e VIRTUAL_HOST=miserver.dyalog.bramley -e VIRTUAL_PORT=8080')
                try {
                        //Get the IP of the container
                        def DOCKER_IP = sh (
                                script: "docker inspect ${MiServer.id} | jq .[0].NetworkSettings.IPAddress | sed 's/\"//g'",
                                returnStdout: true
                        ).trim()
                        sh "rm -f /tmp/miserver-test.log"
                        sh "sleep 10 && for F in `ls ${WORKSPACE}/CI/test-*.sh`; do /bin/bash \${F} ${DOCKER_IP}; done"
                        MiServer.stop()
                } catch (Exception e) {
                        println 'MiServer Not running correctly; cleaning up.'
                        sh "git rev-parse --short HEAD > .git/commit-id"
                                withCredentials([string(credentialsId: '0435817a-5f0f-47e1-9dcc-800d85e5c335', variable: 'GHTOKEN')]) {
                                        commit_id = readFile('.git/commit-id')
                                        sh "${WORKSPACE}/CI/GH-Comment.sh ${MiServer.id} ${commit_id}"
                                }
                        MiServer.stop()
                        sh "docker rmi dyalog/miserver:latest"
                        throw e;
                }
        }
        stage ('Publish Docker image') {
                withDockerRegistry(credentialsId: '0435817a-5f0f-47e1-9dcc-800d85e5c335') {
                        if (env.BRANCH_NAME.contains('master')) {
                                DockerApp.push();
                        }
                }
                if (env.BRANCH_NAME.contains('miserver.dyalog.com')) {
                        withDockerRegistry([credentialsId: 'b683ae6d-a5b8-4d6d-aadf-aeeee441e8af', url: 'http://registry.dyalog.com:5000']) {
                                sh 'docker tag dyalog/miserver:latest registry.dyalog.com:5000/dyalog/miserver:live'
                                sh 'docker push registry.dyalog.com:5000/dyalog/miserver:live'
                        }
                }
        }


        if (env.BRANCH_NAME.contains('miserver.dyalog.com')) {
                withCredentials([usernamePassword(credentialsId: '02543ae7-7ed9-4448-ba20-6b367d302ecc', passwordVariable: 'SECRETKEY', usernameVariable: 'ACCESSKEY')]) {
                        stage('Deploying with Rancher') {
                                sh '/usr/local/bin/rancher-compose --access-key $ACCESSKEY --secret-key $SECRETKEY --url http://rancher.dyalog.com:8080/v2-beta/projects/1a5/stacks/1st3 -p MiServer up --force-upgrade --confirm-upgrade --pull -d'
                        }
                }
        }

        stage ('Cleanup') {
                        if (env.BRANCH_NAME.contains('miserver.dyalog.com')) {
                                sh 'docker rmi registry.dyalog.com:5000/dyalog/miserver:live'
                        }
                        sh 'docker rmi dyalog/miserver:latest'
        }
	
	stage ('Github Upload') {
		withCredentials([string(credentialsId: '112b0db7-e903-40c0-b70c-aab2394b3617', variable: 'GHTOKEN')]) {
			sh './CI/GH-Release.sh'
		}

        }


}

