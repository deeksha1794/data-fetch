import * as React from 'react';
import LoadJsonData from './common/LoadJsonData';
import DataTable from './common/DataTable';



interface State{
  data: {}
}

class App extends React.PureComponent<any, State> {

  public constructor(props: any) {
    super(props)
    this.state = {
      data: undefined
    }
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <input type="file" onChange={(e) => this.onClickHandler(e.target.files)} />
        <DataTable data={this.state.data} />
      </div>
    );
  }

  private onClickHandler = (file: FileList) => {
    const reader = new FileReader();
    reader.onloadend = (e) => {
      const promiseData = LoadJsonData(`${reader.result}`);
      promiseData.then((result) => {
        this.setState({ data: result });
      })
    }
    reader.readAsDataURL(file[0]);

  }
}

export default App;
