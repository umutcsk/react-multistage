pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                // Git deposundan kod çekme işlemi
                git branch: 'main', url: 'https://github.com/umutcsk/react-multistage.git'
            }
        }

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
