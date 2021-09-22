<template>
  <div class="main-container">
    <div id="app">
      <div>
        <button class="play" v-if="!isRecording" @click="startRecording">
          <i class="fas fa-microphone"></i>
        </button>
        <button v-else @click="stopRecording">
          <i class="fas fa-stop"></i>
        </button>
      </div>

      <div>
        <template v-if="audioSource">
          <audio :src="audioSource" controls></audio>
        </template>
      </div>
      <div>
        <div v-if="audioSource">
          <h1 class="delete" @click="deleteRecording">Delete</h1>
        </div>
        <div v-else>
          <h1>Recording</h1>
        </div>
      </div>
    </div>
    <button @click.prevent="getAudio(audioSource)">submit</button>

    
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data() {
    return {
      isRecording: false,
      audioSource: null,
      frequencies: null,
    };
  },
  props: {
    getAudio: Function,
  },
  methods: {
    startRecording() {
      this.deleteRecording();
      this.isRecording = true;
      this.mediaRecorder.start();
    },
    stopRecording() {
      this.isRecording = false;
      this.mediaRecorder.stop();
    },
    deleteRecording() {
      this.audioSource = null;
    },
    handleSubmit() {
      console.log("audio,", this.audioSource, this.frequencies);
    },
  },
  directives: {
    visualize: {
      update(canvasElement, binding) {
        const context = canvasElement.getContext("2d");

        const width = canvasElement.width;
        const height = canvasElement.height;

        context.clearRect(0, 0, width, height);
        context.beginPath();

        const dataLength = binding.value.length;
        const sliceWidth = (width * 1.0) / dataLength;
        let x = 0;

        for (let i = 0; i < dataLength; i++) {
          const v = binding.value[i] / 128.0;
          const y = (v * height) / 2;

          if (i === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }

          x += sliceWidth;
        }

        context.lineTo(width, height / 2);
        context.stroke();
      },
    },
  },
  mounted() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      initMediaRecorder.call(this, stream);
      initVisualizer.call(this, stream);
    });
  },
};

function initMediaRecorder(stream) {
  const recorder = new MediaRecorder(stream);
  let chunks = [];

  recorder.addEventListener("stop", () => {
    var blob = new Blob(chunks, { type: "audio/webm" });
    chunks = [];
    this.audioSource = URL.createObjectURL(blob);
  });

  recorder.addEventListener("dataavailable", (e) => {
    chunks.push(e.data);
  });

  this.mediaRecorder = recorder;
}

function initVisualizer(stream) {
  const context = new AudioContext();

  const analyser = context.createAnalyser();
  analyser.fftSize = 2048;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);

  const source = context.createMediaStreamSource(stream);
  source.connect(analyser);

  const updateData = () => {
    analyser.getByteTimeDomainData(dataArray);
    this.frequencies = dataArray.slice();

    requestAnimationFrame(updateData);
  };

  updateData();
}
</script>

<style scoped>
#app {
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: space-between;
  margin: 40px 30px;
  border-radius: 20px;
  max-width: 420px;
  height: 50px;
}
h1,
.delete {
  font-size: 1rem;
  cursor: pointer;
}
body {
  margin: 0rem;
}

audio,
button {
  width: 30%;
}

audio {
  width: 150px;
  margin: 0;
  text-align: center;
  /* margin-top: 25px; */
}
button {
  width: 20px;
  display: block;
}
.fas {
  color: rgb(112, 216, 112);
  font-size: 1rem;
  text-align: left;
  /* margin: 30px 20px; */
  padding: 10px;
  background: #c4f2dc;
  border-radius: 50%;
}
</style>