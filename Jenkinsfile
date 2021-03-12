pipeline {
    agent any
    /*agent {
        docker {
            image 'node:12-alpine'
        }
    }
    environment { HOME = '.' }*/
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
            post {
               success{
                    discordSend description: env.JOB_NAME, footer: 'Despliegue en Pruebas', link: 'https://quipucamayoc.unmsm.edu.pe/wiki', result: currentBuild.currentResult, unstable: false, title: JOB_NAME, webhookURL: 'https://discord.com/api/webhooks/819917574262751242/8TRzm68ODQZ8jVzZruVPbw-R0IlW66xAch6A8cNycv1ch8TFPvT_aalLXCaVFj-gdj_8'
                 }
            }

        }
    }
}