@Library('swarm-deploy') _
def DockerApp

node ('Docker') {
        stage ('Checkout') {
                checkout scm
        }
	stage ('Pull Dyalog Container') {
	
            withDockerRegistry(credentialsId: '0435817a-5f0f-47e1-9dcc-800d85e5c335') {
		sh ('docker pull dyalog/dyalog')
	    }
	}
        stage ('Build Docker Image') {
            withDockerRegistry(credentialsId: '0435817a-5f0f-47e1-9dcc-800d85e5c335') {
                // Create a version file to include in the container
                sh 'echo "$(cat version).$(git rev-list HEAD --count) - ($(git rev-parse HEAD))" > ./MiServer.version'
                if (env.BRANCH_NAME.contains('master')) {
                        DockerApp = docker.build 'dyalog/miserver:latest'
                } else {
                        DockerApp = docker.build "dyalog/miserver:${env.BRANCH_NAME}"
                }
            }
        }
        stage ('Test website') {

            withDockerRegistry(credentialsId: '0435817a-5f0f-47e1-9dcc-800d85e5c335') {

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
                        stash includes: 'service.yml', name: 'swarm-stash'
                } catch (Exception e) {
                        println 'MiServer Not running correctly; cleaning up.'
                        sh "git rev-parse --short HEAD > .git/commit-id"
                                withCredentials([string(credentialsId: '250bdc45-ee69-451a-8783-30701df16935', variable: 'GHTOKEN')]) {
                                        commit_id = readFile('.git/commit-id')
                                        sh "${WORKSPACE}/CI/GH-Comment.sh ${MiServer.id} ${commit_id}"
                                }
                        MiServer.stop()
                        sh "docker rmi dyalog/miserver:latest"
                        throw e;
                }
            }
        }
        stage ('Publish Docker image') {
                withDockerRegistry(credentialsId: '0435817a-5f0f-47e1-9dcc-800d85e5c335') {
//                        if (env.BRANCH_NAME.contains('master')) {
                                DockerApp.push();
//                        }
                }
        }

        stage ('Cleanup') {
                if (env.BRANCH_NAME.contains('master')) {
                        sh 'docker rmi dyalog/miserver:latest'
                } else {
                        sh "docker rmi dyalog/miserver:${env.BRANCH_NAME}"
                }
        }
	
	stage ('Github Upload') {
                withCredentials([string(credentialsId: '250bdc45-ee69-451a-8783-30701df16935', variable: 'GHTOKEN')]) {
			sh './CI/GH-Release.sh'
		}
        }
}

if (env.BRANCH_NAME.contains('master')) {
    node (label: 'swarm && gosport') {
        stage('Deploying with Docker Swarm') {
                unstash 'swarm-stash'
                r = swarm "MiServer"
                echo r
        }
    }
}
