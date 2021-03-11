pipeline {
    agent {
        docker {
            image 'node:12-alpine'
        }
    }
    environment { HOME = '.' }
    stages {
        stage('Build-Backend') {
            
            steps {
                dir('app'){
                    echo "${WORKSPACE}"
                    echo "Estoy en App"
                    sh 'npm install'
                    sh 'ls -l'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'sh deploy.sh'
            }
        }
    }
}