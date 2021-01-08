# morphcastSample
usage of morphicast sdk 

How it works
MorphCast HTML5 AI SDK is a native JavaScript engine, based on Deep Neural Networks.

It works directly in the web-browser of mobile and desktop and in a webview inside mobile App.


---

MorphCast SDK is a modular library containing the following modules/outputs:

* Faces: Presence of faces from 0 to 6
* Pose on the tree axes: pitch, roll, yaw
* Age, Gender
* Emotions: Angry, Disgust, Fear, Happy, Sad, Surprise, Neutral
* 37 face features: Arched Eyebrows, Attractive, Bags Under Eyes, Bald, Bangs, Beard 5 O’Clock Shadow, Big Lips, Big Nose, Black Hair, Blond Hair, * Brown Hair, Chubby, Double Chin, Earrings, Eyebrows Bushy, Eyeglasses, Goatee, Gray Hair, Hat, Heavy Makeup, High Cheekbones, Lipstick, Mouth * Slightly Open, Mustache, Narrow Eyes, Necklace, Necktie, No Beard, Oval Face, Pale Skin, Pointy Nose, Receding, Hairline, Rosy Cheeks, Sideburns, * Straight Hair, Wavy Hair.
* Arousal and Valence
* 34 moods (circumplex model of affect, scientific paper reference): angry, annoyed, enraged, frustrated, afraid, uncomfortable, worried, anxious, * happy, amused, good, pleased, satisfied, excited, hopeful, apathetic, bored, discontent, calm, content, peaceful, relaxed, sad, depressed, * disappointed, melancholy, distressed, contemplative, pensive, determined, embarrassed, sleepy, tired, impressed


## Usages

```
node server.js
```

Or

```
docker build . -t morphcastapp:v1
docker run -ti --rm -p 3000:3000 morphcastapp:v1
```
Then from your browser hit `http://localhost:3000/`
