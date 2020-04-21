/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// helper functions ----------

function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.log('Looks like there was a problem:', error);
}

function validateResponse(response) {
  if(!response.ok) {
    throw Error(response.statusText)
  } else {
    return response
  }
}

function responseAsJson(response){
  return response.json()
}

function showImage(responseAsBlob){
  const imageElement = document.createElement('img')
  const container = document.getElementById('img-container')
  const imageUrl = URL.createObjectURL(responseAsBlob)
  imageElement.src = imageUrl
  container.appendChild(imageElement)
}
function responseAsBlob(response) {
  return response.blob()
}
function responseAsText(response){
  return response.text()
}
function showText(responseAsText){
  const container = document.getElementById('message')
  container.textContent = responseAsText;
}
// Fetch JSON ----------

function fetchJSON() {
   fetch('examples/animals.json')
    .then(validateResponse)
    .then(responseAsJson)
    .then(logResult)
    .catch(logError)
}
const jsonButton = document.getElementById('json-btn');
jsonButton.addEventListener('click', fetchJSON);


// Fetch Image ----------

function fetchImage() {
  // TODO
  fetch('examples/fetching.jpg')
    .then(validateResponse)
    .then(responseAsBlob)
    .then(showImage)
    .catch(logError)
}
const imgButton = document.getElementById('img-btn');
imgButton.addEventListener('click', fetchImage);


// Fetch text ----------

function fetchText() {
  fetch('/examples/words.txt')
    .then(validateResponse)
    .then(responseAsText)
    .then(showText)
    .catch(logError)
  // TODO
}
const textButton = document.getElementById('text-btn');
textButton.addEventListener('click', fetchText);


// HEAD request ----------

function headRequest() {
  // TODO
  fetch('/examples/words.txt', {
    method:'head'
  }).then(validateResponse)
  .then(responseAsText)
  .then(logResult)
  .catch(logError)
   
}
const headButton = document.getElementById('head-btn');
headButton.addEventListener('click', headRequest);


// POST request ----------

/* NOTE: Never send unencrypted user credentials in production! */
function postRequest() {
  // TODO
  var myHeaders = new Headers({
    'Content-Type':'text/plain'
  })
  const data = new FormData(document.getElementById('msg-form'))
  fetch('http://localhost:5000/', 
    {method:'post', body:data,headers:myHeaders})
  .then(validateResponse)
  .then(responseAsText)
  .then(logResult)
  .catch(logError)
}
const postButton = document.getElementById('post-btn');
postButton.addEventListener('click', postRequest);
