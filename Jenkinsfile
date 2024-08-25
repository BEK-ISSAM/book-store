pipeline {
  agent any
  stages {
    stage("build backend") {
      steps {
        echo 'starting backend build phase...'
        dir('backend') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }

    stage("build frontend") {
      steps {
        echo 'starting frontend build phase...'
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
