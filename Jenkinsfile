pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/LoganayagiVenkat/medicine-reminder-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'call npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'call npm run build'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                mkdir "C:\\ProgramData\\Jenkins\\.jenkins\\userContent\\medicine-reminder-app"
                xcopy /E /I /Y "build\\*" "C:\\ProgramData\\Jenkins\\.jenkins\\userContent\\medicine-reminder-app\\"
                '''
            }
        }
    }

    post {
        success {
            echo 'Build and Deployment Successful!'
        }

        failure {
            echo 'Build Failed!'
        }
    }
}