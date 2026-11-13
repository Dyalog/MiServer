def DockerApp
def Release = false
def DockerCreds = '0435817a-5f0f-47e1-9dcc-800d85e5c335'

node ('Docker') {
        stage ('Checkout') {
                checkout scm

                // Only publish when this build is for a tag whose commit is on master.
                // TAG_NAME is only set by Jenkins when the multibranch job builds a tag.
                if (env.TAG_NAME) {
                        // Also fetches the other tags, which GH-Release.sh needs for the changelog
                        sh 'git fetch --tags origin master'
                        Release = sh (
                                script: 'git merge-base --is-ancestor HEAD FETCH_HEAD',
                                returnStatus: true
                        ) == 0
                        if (!Release) {
                                echo "Tag ${env.TAG_NAME} is not on master; building without publishing."
                        }
                } else {
                        echo "Not a tag build; building without publishing."
                }
        }
        stage ('Pull Dyalog Container') {
                withDockerRegistry(credentialsId: DockerCreds) {
                        sh ('docker pull dyalog/dyalog')
                }
        }
        stage ('Build Docker Image') {
                withDockerRegistry(credentialsId: DockerCreds) {
                        // Create a version file to include in the container
                        if (env.TAG_NAME) {
                                sh 'echo "${TAG_NAME#v} - ($(git rev-parse HEAD))" > ./MiServer.version'
                        } else {
                                sh 'echo "$(cat version).$(git rev-list HEAD --count) - ($(git rev-parse HEAD))" > ./MiServer.version'
                        }
                        DockerApp = docker.build "dyalog/miserver:${env.TAG_NAME ?: env.BRANCH_NAME}"
                }
        }
        try {
                if (Release) {
                        stage ('Publish Docker image') {
                                withDockerRegistry(credentialsId: DockerCreds) {
                                        DockerApp.push()
                                        DockerApp.push('latest')
                                }
                        }
                }
        } finally {
                stage ('Cleanup') {
                        sh "docker rmi ${DockerApp.id}"
                        if (Release) {
                                sh 'docker rmi dyalog/miserver:latest || true'
                        }
                }
        }

        if (Release) {
                stage ('Github Upload') {
                        withCredentials([string(credentialsId: '250bdc45-ee69-451a-8783-30701df16935', variable: 'GHTOKEN')]) {
                                sh './CI/GH-Release.sh'
                        }
                }
        }
}
