def DockerApp

node ('Docker') {
	stage ('Checkout') {
		checkout scm
	}
	withDockerRegistry([credentialsId: 'da63d34a-9b75-4c86-ba25-8eae68384001', url: 'http://registry.dyalog.com:5000']) {
		stage ('Build Docker Image') {
			DockerApp = docker.build 'registry.dyalog.com:5000/dyalog/miserver'
		}
		stage ('Publish Docker image') {
			if (env.BRANCH_NAME.contains('JR-Test') {
				sh 'docker push registry.dyalog.com:5000/dyalog/statsite:latest'
			}
			if (env.BRANCH_NAME.contains('miserver.dyalog.com') {
				sh 'docker tag registry.dyalog.com:5000/dyalog/statsite:latest registry.dyalog.com:5000/dyalog/statsite:live'
				sh 'docker push registry.dyalog.com:5000/dyalog/statsite:live
			}
			
		}
	}
}

