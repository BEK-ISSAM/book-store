pipeline {
  agent any
  stages {
    stage("Build Backend") {
      steps {
        echo 'Starting backend build phase...'
        
        dir('backend') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }
    stage("Build Frontend") {
      steps {
        echo 'Starting frontend build phase...'
        
        dir('frontend') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }
  }

  post {
    always {
      echo 'The pipeline has finished'
    }
    success {
      echo 'Congrats! Pipeline Success'
    }
    failure {
      echo 'Oops! Your pipeline has failed'
    }
  }
}
