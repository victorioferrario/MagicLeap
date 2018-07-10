
import * as React from "react";
export interface IPropsYouTube {
    videoId?: string
}

export const IFrame = (url:string) => (
 <iframe width="560" height="315" src={url}
    style={{ width: '100%', height: '100%', minHeight: '55vh', marginTop: '25px' }} allow={"autoplay=true; encrypted-media"} allowFullScreen={true}  />);
export class YouTubeController extends React.Component<IPropsYouTube, {}> {
    constructor(props: IPropsYouTube) {
        super(props);
    }
    public render(){
        const url =  "https://www.youtube.com/embed/" + this.props.videoId + "?rel=0";
        return (
        <React.Fragment>
            <h3 style={{marginBottom:0, backgroundColor:"#2196f3", color:"#FFF", padding:10}}>Video</h3>
            { IFrame(url)}
            <br /><br />
        </React.Fragment>);
    }
}

