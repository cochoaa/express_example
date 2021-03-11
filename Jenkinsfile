pipeline {
    agent any
    stages {
        stage('Build-Backend') {
            agent {
                docker {
                    image 'node:12-alpine'
                }
            }
            environment {
                HOME = '.'
            }
            steps {
                dir('app'){
                    echo "Estoy en App"
                    sh 'npm install'
                    sh 'ls -l'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                sh './deploy.sh'
            }
        }
    }
}