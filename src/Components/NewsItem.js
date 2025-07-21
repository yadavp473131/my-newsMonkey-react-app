import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl, newsUrl, date, author,source} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{width:"18rem"}}>
                    {/* <span className='position-absolute top-0 transition-middle badge rounded-pill bg-danger' style={{left:"75%", zIndex:"1"}}>{source}</span> */}
                    <span className='badge' style={{display:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>{source}</span>
                    <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className='card-text'>
                            <small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary btn-sm">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
