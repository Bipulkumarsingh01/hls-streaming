from  pytube import YouTube

def download_youtube_video(url, output_path='.'):
    try:
        # Create YouTube object
        yt = YouTube(url)

        # Get the highest resolution stream available
        stream = yt.streams.get_highest_resolution()

        # Download the video
        stream.download(output_path)

        print(f'Video downloaded successfully: {yt.title}')
    except Exception as e:
        print(f'An error occurred: {e}')

# Example usage
youtube_url = 'https://www.youtube.com/watch?v=gy5_T2ACerk&list=RDgy5_T2ACerk&start_radio=1&ab_channel=DBeatsMusicWorld'
download_youtube_video(youtube_url, output_path='/content/sample_data')

#pip install pytube


/// to build the image
docker build -t video-transcoder .

//

docker run -it -v /Users/vipulkumarsingh/Desktop/coding/hls-streaming/videos:/home/app/videos video-transcoder


//

control+d to stop it
