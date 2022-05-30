import React, { Component } from 'react';
import { get, update, remove, create } from './Api';
import { Comic } from './Comic';

export class ComicsList extends Component {
  state = {
    comics: [],
    newTitle: '',
    newStory: ''
  };
  
  componentDidMount() {
   // this.getComics();
  }

  getComics = async () => {
    const comics = await get();
    this.setState({ comics })
  }

  deleteComic = async (id) => {
    await remove(id);
    await this.getComics();
  }

  createComic = async (comic) => {
    await create(comic);
    await this.getComics();
  }

  updateComic = async (comic) => {
    await update(comic);
    await this.getComics();
  }

  render() {
    return (
      <div>
        <h1>Create a comic</h1>
        <form onSubmit={() => {}}>
          <input
            type='test'
            placeholder='comic title'
            onChange={(e) => this.setState({ newTitle: e.target.value })}
            value={ this.state.newTitle } />
          <input
            type='test'
            placeholder='story content'
            onChange={(e) => this.setState({ newStory: e.target.value })}
            value={ this.state.newStory } />
        </form>
        <button type='submit' 
          onClick={this.createComic({ name: this.state.newTitle, stories: [].push(this.state.newStory) })}>
            Create Comic
        </button>
        {
          this.state.comics.map((comic) => {
            return <Comic key={comic._id} comic={comic} updateComic={this.updateComic}/>
          })
        }
      </div>
    );
  }
}