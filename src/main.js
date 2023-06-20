import "./utils/params.js";

// const YoutubeMp3Downloader = require("youtube-mp3-downloader");

/* 
if (!videoURL || !outputFileName) {
   console.log("Video URL and output file name are required.");
   console.log("Usage: node youtube-mp3-downloader.js <video URL> <output file name>");
   process.exit(1);
}

const downloadMp3 = (videoURL, outputFileName) => {
   const YD = new YoutubeMp3Downloader({
      ffmpegPath: "/usr/local/bin/ffmpeg", // ffmpeg'in yolunu kendi sisteminizde uygun şekilde değiştirin
      outputPath: "./", // Çıktı dosyasının kaydedileceği dizin
      youtubeVideoQuality: "highest", // YouTube video kalitesi
      queueParallelism: 2, // Aynı anda indirilecek maksimum dosya sayısı
      progressTimeout: 2000, // İndirme ilerlemesi güncelleme sıklığı (ms)
   });

   YD.download(videoURL);

   YD.on("finished", (err, data) => {
      console.log(`MP3 downloaded successfully: ${data.file}`);
   });

   YD.on("error", (error) => {
      console.log("An error occurred while downloading the MP3:", error);
   });

   YD.on("progress", (progress) => {
      console.log(`Downloading: ${progress.videoId} (${progress.progress.percentage.toFixed(2)}%)`);
   });
};

downloadMp3(videoURL, outputFileName);

// MP3'i indirirken bir hata oluştu: Spawn/usr/local/bin/ffmpeg enoent
*/
