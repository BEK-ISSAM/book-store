pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'dev', url: 'https://github.com/BEK-ISSAM/book-store.git'
            }
        }
        stage('Install Dependencies') {
            parallel {
                stage('Install Backend Dependencies') {
                    steps {
                        echo 'Installing backend dependencies...'
                        dir('backend') {
                            bat 'npm install'
                        }
                    }
                }
                stage('Install Frontend Dependencies') {
                    steps {
                        echo 'Installing frontend dependencies...'
                        dir('frontend') {
                            bat 'npm install'
                        }
                    }
                }
            }
        }
        stage('Build Backend') {
            steps {
                echo 'Building backend...'
                dir('backend') {
                    bat 'npm run build'  // Adjust this if your build command is different
                }
            }
        }
        stage('Build Frontend') {
            steps {
                echo 'Building frontend...'
                dir('frontend') {
                    bat 'npm run build'  // Adjust this if your build command is different
                }
            }
        }
    }

    post {
        always {
            echo 'The pipeline has finished'
        }
        failure {
            echo 'Oops! Your pipeline has failed'
        }
    }
}
