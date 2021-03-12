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
                    discordSend title: JOB_NAME, description: currentBuild.description, footer: currentBuild.displayName, link: 'https://quipucamayoc.unmsm.edu.pe/wiki', result: currentBuild.currentResult, unstable: false,  webhookURL: 'https://discord.com/api/webhooks/819917574262751242/8TRzm68ODQZ8jVzZruVPbw-R0IlW66xAch6A8cNycv1ch8TFPvT_aalLXCaVFj-gdj_8', thumbnail: 'https://d1q6f0aelx0por.cloudfront.net/product-logos/f5326186-8ae7-425c-a78d-7192dabf75be-jenkins.png'
                 }
            }

        }
    }
}