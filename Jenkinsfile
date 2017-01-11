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
			if (env.BRANCH_NAME.contains('master')) {
				sh 'docker push registry.dyalog.com:5000/dyalog/miserver:latest'
				sh 'docker tag registry.dyalog.com:5000/dyalog/miserver:latest registry.dyalog.com:5000/dyalog/miserver:ms3'
				sh 'docker push registry.dyalog.com:5000/dyalog/miserver:ms3'
			}
			if (env.BRANCH_NAME.contains('miserver.dyalog.com')) {
				sh 'docker tag registry.dyalog.com:5000/dyalog/miserver:latest registry.dyalog.com:5000/dyalog/miserver:live'
				sh 'docker push registry.dyalog.com:5000/dyalog/miserver:live'
			}
			
		}
	}
	if (env.BRANCH_NAME.contains('miserver.dyalog.com')) {
		withCredentials([usernamePassword(credentialsId: 'f776da40-9d48-4f58-a6fe-d1888b7af35f', passwordVariable: 'SECRETKEY', usernameVariable: 'ACCESSKEY')]) {
			stage('Deploying with Rancher') {
				sh '/usr/local/bin/rancher-compose --access-key $ACCESSKEY --secret-key $SECRETKEY --url http://rancher.dyalog.com:8080/v2-beta/projects/1a5/stacks/1st3 -p MiServer up --force-upgrade --confirm-upgrade --pull -d'
			}
		}
	}

	stage ('Cleanup') {
			if (env.BRANCH_NAME.contains('master')) {
				sh 'docker rmi registry.dyalog.com:5000/dyalog/miserver:latest'
				sh 'docker rmi registry.dyalog.com:5000/dyalog/miserver:ms3'
			}
			if (env.BRANCH_NAME.contains('miserver.dyalog.com')) {
				sh 'docker rmi registry.dyalog.com:5000/dyalog/miserver:live'
			}
	}

}

