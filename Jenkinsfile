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
        stage('Run Backend') {
            steps {
                echo 'Starting backend server...'
                dir('backend') {
                    bat 'node index.js'
                }
            }
        }
        stage('Run Frontend') {
            steps {
                echo 'Starting frontend development server...'
                dir('frontend') {
                    bat 'npm run dev'
                }
            }
        }
    }

    post {
        always {
            echo 'The pipeline has finished'
        }
        success {
            echo 'Congrats! Your pipeline has succeeded'
        }
        failure {
            echo 'Oops! Your pipeline has failed'
        }
    }
}
