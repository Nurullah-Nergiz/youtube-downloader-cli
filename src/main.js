import yt from "yt-converter";
import "./utils/params.js";

const { url, format, help } = process.params;

if (!help) {
   yt.getInfo(url).then((info) => {
      console.log("Downloading" + info.title + "." + format);
      if (format === "mp3") {
         yt.convertAudio(
            {
               url,
               directoryDownload: process.cwd(),
               itag: 140,
               title: info.title,
            },
            (data) => {
               console.log("1 ", data);
            },
            (data) => {
               console.log("2 ", data);
            }
         );
      } else if (format === "mp4") {
         yt.convertVideo(
            {
               url,
               directoryDownload: process.cwd(),
               itag: 136,
               title: info.title,
            },
            (data) => {
               console.clear();
               console.log(info.title + "." + format);
               console.log("%" + data.percentage);
            },
            (data) => console.log(info.title)
         );
      }
   });
} else {
   console.log("--url : youtube video link");
   console.log("--format : video format (mp3,mp4)");
}
