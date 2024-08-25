pipeline {
  agent any
  stages {
    stage("build") {
      steps {
        
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
