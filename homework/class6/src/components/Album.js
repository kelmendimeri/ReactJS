import React from "react";

export class Albums extends React.Component {
  constructor(props) {
    super(props);

    this.state = { albums: [] };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ albums: json });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div id="albums">
        <h2>Albums</h2>
        {this.state.albums.length > 0 ? (
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th>UserID</th>
                <th>AlbumID</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {this.state.albums
                .sort((album) => album.id)
                .map((album) => {
                  return (
                    <tr key={album.id}>
                      <td>{album.userId}</td>
                      <td>{album.id}</td>
                      <td>{album.title}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <h2> Albums are loading</h2>
        )}
      </div>
    );
  }
}
