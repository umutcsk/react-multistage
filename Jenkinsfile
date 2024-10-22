pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t hello-world-server .'
            }
        }

        stage('Run') {
            steps {
                sh 'docker run -d -p 3000:3000 hello-world-server'
            }
        }
    }

    post {
        always {
            cleanWs() 
        }
    }
}
