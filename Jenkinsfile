pipeline {
    agent any

    stages {
        stage('Build-Backend') {
            docker {
                image 'node:12-alpine'
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