pipeline {
  agent any
  stages {
    stage("build") {
      steps {
        echo 'starting build phase...'
        sh 'npm install'
        sh 'npm build'
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
