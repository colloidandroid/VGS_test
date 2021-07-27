# VGS_test

  Pre-requisites:


Install and run mongoDB (run on standard "mongodb://localhost:27017")

Install and run ngrok.

Download sandbox.pem certificate.

Populate .env file with the below vars:

  PORT

  VAULT_ID

  HTTPS_PROXY_USERNAME

  HTTPS_PROXY_PASSWORD




  To start:

Copy project.

Install dependencies.

Run project.




  1. To see redacted data.

Create an inbound VGS route, use upstream=your_ngrok_url, secure payload.

Browse http://localhost:{PORT}

Enter data and press submit, see tokenized values.

Go back, press link "view feedbacks" to fetch all saved values.




  2. To see revealed data.

Create an outbound VGS route, use echo server (https://echo.apps.verygood.systems), secure payload.

Setup a proxy settings in your browser (Firefox recomended).

  Use 

  HTTPS Proxy: {VAULT_ID}.SANDBOX.verygoodproxy.com:8080

  Username: {HTTPS_PROXY_USERNAME}

  Password: {HTTPS_PROXY_PASSWORD}



Upload your sandbox.pem certificate.

Browse http://localhost:{PORT}/post-tokens

Enter tok data and press submit.

Check revealed values in responce.
