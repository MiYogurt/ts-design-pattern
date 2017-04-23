interface MediaPlayer{
    play(type: string, filename: string)
}

interface AdvanceMediaPlayer{
    playVlc?(filename: string)
    playMp4?(filename: string)
}

class VlcPlayer implements AdvanceMediaPlayer{
    playVlc(filename){
        console.log("playing vlc file....." + filename)
    }
}

class Mp4Player implements AdvanceMediaPlayer{
    playMp4(filename){
        console.log("playing mp4 file....." + filename)
    }
}


class MediaAdaper implements MediaPlayer{
    player : AdvanceMediaPlayer;
    constructor(type) {
        // 根据type 生成哪一个播放类
        if(type == "vlc"){
            this.player =  new VlcPlayer()
        }else if(type == "mp4"){
            this.player = new Mp4Player()
        }else{
            return null;
        }
    }
    play(type: string, filename: string){
        // 因为特定的播放类有特定的播放方法，所以还需要再根据type调用特定的播放类
        if(type == "vlc"){
            this.player.playVlc(filename);
        }else if(type == "mp4"){
            this.player.playMp4(filename)
        }else{
            return null;
        }
    }
}


class AudioPlayer implements MediaPlayer{
    MediaAdaper: MediaAdaper;
    play(type, filename){
        if(type == 'mp3'){
            console.log("播放器内置支持mp3，"+ filename +"已开始播放！");
        }else if(type == 'vlc' || type == 'mp4'){
            this.MediaAdaper = new MediaAdaper(type);
            this.MediaAdaper.play(type, filename)
        }else{
            console.log('不支持当前格式!');
        }
    }
}

let player = new AudioPlayer();

player.play('mp3', 'aa.mp3');
player.play('vlc', 'bb.vlc');
player.play('mp4', 'cc.mp4');