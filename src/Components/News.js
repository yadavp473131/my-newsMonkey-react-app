import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    articles = [
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "The Wall Street Journal",
            "title": "Stock Market Today: Dow Rises 250 Points; Earnings, Economic Data in Focus — Live Updates - The Wall Street Journal",
            "description": null,
            "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-07-17-2025",
            "urlToImage": null,
            "publishedAt": "2025-07-18T01:55:00Z",
            "content": null
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "ABC News - Breaking News, Latest News and Videos",
            "title": "Why the White House is attacking Jerome Powell over the ‘Taj Mahal on the National Mall’ - ABC News - Breaking News, Latest News and Videos",
            "description": null,
            "url": "https://abcnews.go.com/Politics/white-house-attacking-jerome-powell-taj-mahal-national/story?id\\\\u003d123815178",
            "urlToImage": null,
            "publishedAt": "2025-07-18T00:45:00Z",
            "content": null
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": "Mark Gurman, Kurt Wagner",
            "title": "Meta Hires Two Key Apple AI Experts After Poaching Their Boss - Bloomberg.com",
            "description": "Meta Platforms Inc. hired a pair of key artificial intelligence researchers who worked at Apple Inc., shortly after poaching their former boss from the iPhone maker.",
            "url": "https://www.bloomberg.com/news/articles/2025-07-17/meta-hires-two-key-apple-ai-experts-after-poaching-their-boss",
            "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iA8wnZNtg19c/v0/1200x799.jpg",
            "publishedAt": "2025-07-17T23:37:36Z",
            "content": "Meta Platforms Inc. hired a pair of key artificial intelligence researchers who worked at Apple Inc., shortly after poaching their former boss from the iPhone maker. \r\nThe social networking giant hir… [+310 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "US passes Genius Act, first major national crypto legislation - BBC",
            "description": "It marks a milestone for the once fringe industry, as it expands its power in Washington.",
            "url": "https://www.bbc.com/news/articles/cd78lvd94zyo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7fa6/live/0b5ff260-6356-11f0-a86d-c3f2092dd183.jpg",
            "publishedAt": "2025-07-17T23:17:14Z",
            "content": "Lawmakers in the US have passed the country's first major national cryptocurrency legislation.\r\nIt is a major milestone for the once fringe industry, which has been lobbying Congress over regulation … [+3568 chars]"
        }
    ]

    constructor(props) {
        super(props);
        document.title = `${this.capitalizeFirstLetter(this.props.category)}- NewsMonkey`;
        
        this.state = {
            // articles:this.articles,
            articles: [],
            loading: false,
            page: 1,
            pageSize: 10,

        }
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    async updateNews() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);

        this.setState({
            articles: parsedData.articles,
            // totalResults: parsedData.totalResults,
            totalResults: 0,
            loading: false,
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json();

        // this.setState({
        //     articles:parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading:false,
        // })

        this.updateNews()
    }
    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            // articles:parsedData.articles,
            // loading: false,


        })
        this.updateNews()
    }
    handleNextClick = async () => {
        if (!(this.state.page > Math.ceil(this.state.totalResults / this.state.pageSize))) {
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            // this.setState({
            //     loading: true
            // })
            // let data = await fetch(url);
            // let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                // articles: parsedData.articles,
                // loading: false
            })
            this.updateNews()
        }
    }

    fetchMoreData = async () => {
        this.setState({
            page:this.page+1,
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            
            articles: this.state.articles.concat(parsedData.articles),
        })
    }
    render() {


        return (
            // <div className='container my-3'>
            <>
                {/* <h1 className='text-center'>NewsMonkey - Top Headlines</h1> */}
                <h1 className='text-center' style={{ margin: "35px 0px" }} >NewsMonkey - Top Headlines on {this.capitalizeFirstLetter(this.props.category)} category</h1>

                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length!==this.state.totalResults} loader={<Spinner/>} >
                <div className='container'>
                <div className='row'>

                    {!this.state.loading && this.state.articles.map((element) => {

                        return <div className='col-md-4'>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                                description={element.description ? element.description.slice(0, 88) : ""} date={element.publishedAt} source={element.source.name} key={element.url} author={element.author} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>

                    })}

                </div>
                {/* <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} type="button" className='btn btn-dark'>&larr; Previous</button>
                    <button disabled={this.state.page > Math.ceil(this.state.totalResults / this.state.pageSize)} type="button" onClick={this.handleNextClick} className='btn btn-dark'>Next &rarr;</button>
                </div> */}
                </div>
                </InfiniteScroll>
            {/* </div> */}
            </>
        )
    }
}

export default News
