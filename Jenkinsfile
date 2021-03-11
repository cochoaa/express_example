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
                    sh "pwd"
                    echo "Estoy en App"
                    sh 'node --version'
                    sh 'npm --version'
                    sh 'npm install'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                dir('DESARROLLO/CODIGO_FUENTE/mesa-de-partes'){
                    sh './deploy.sh'
                }
            }
        }
    }
}