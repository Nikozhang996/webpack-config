import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      author: 'Niko_Zhangs',
      github: 'https://github.com/Nikozhang996'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Power by {this.author}，github：<a href={this.github}>{this.github}</a></span>
        <br />
        <span>Hosted by Coding Pages</span>
      </div>
    )
  }
}