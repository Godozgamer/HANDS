
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZNMMsJa6H/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);

    } else {
console.log(results)
document.getElementById("result_emotion_name").innerHTML = results[0].label;
document.getElementById("result_emotion_name2").innerHTML = results[1].label;
prediction_1 = results[0].label;
prediction_2 = results[1].label;
speak();
if(results[0].label == "Up")
{
    document.getElementById("update_emoji").innerHTML = "&#9757;"
}
if(results[0].label == "Down")
{
    document.getElementById("update_emoji").innerHTML = "&#9759;"
}
if(results[0].label == "Right")
{
    document.getElementById("update_emoji").innerHTML = "&#9758;"
}
if(results[0].label == "Left")
{
    document.getElementById("update_emoji").innerHTML = "&#128072;"
}

if(results[1].label == "Up")
{
    document.getElementById("update_emoji2").innerHTML = "&#9757;"
}
if(results[1].label == "Down")
{
    document.getElementById("update_emoji2").innerHTML = "&#9759;"
}
if(results[1].label == "Right")
{
    document.getElementById("update_emoji2").innerHTML = "&#9758;"
}
if(results[1].label == "Left")
{
    document.getElementById("update_emoji2").innerHTML = "&#128072;"
}
}
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first Prediction is"+prediction_1;
    speak_data_2 = "And the second Prediction is"+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
