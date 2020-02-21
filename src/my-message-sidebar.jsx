import { React, FocusedContactsStore } from "mailspring-exports";
import { RetinaImg } from 'mailspring-component-kit';

export default class MyMessageSidebar extends React.Component {
  static displayName = "MyMessageSidebar";

  // This sidebar component listens to the FocusedContactStore,
  // which gives us access to the Contact object of the currently
  // selected person in the conversation. If you wanted to take
  // the contact and fetch your own data, you'd want to create
  // your own store, so the flow of data would be:

  // FocusedContactStore => Your Store => Your Component
  constructor(props) {
    super(props);
    this.state = this._getStateFromStores();
  }

  componentDidMount() {
    this.unsubscribe = FocusedContactsStore.listen(this._onChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  _onChange = () => {
    this.setState(this._getStateFromStores());
  };

  _getStateFromStores = () => {
    return {
      contact: FocusedContactsStore.focusedContact()
    };
  };

  _renderContent() {
    // Want to include images or other static assets in your components?
    // Reference them using the mailspring:// URL scheme:
    //
    // <RetinaImg
    //    url="mailspring://<<package.name>>/assets/checkmark_templatethis.2x.png"
    //    mode={RetinaImg.Mode.ContentIsMask}/>
    //
    var company = this.state.contact.guessCompanyFromEmail()
    var aria_str = "" 
    if (company.toLowerCase() == 'oracle') {
        return (
            <div className="header" style={{ display: 'block', marginTop: 20 }}>
             <p>
                <a href={`https://people.oracle.com/apex/f?p=8000:HOME::::::#${this.state.contact.email}`} style={{ 'text-decoration': 'none' }}>
                <img src="mailspring://aria/assets/oracle.png"/> View in Aria
                </a>
             </p>
            </div>
        );
    } else {
        return("");

    }
  }

  _renderPlaceholder() {
    return <div> No Data Available </div>;
  }

  render() {
    const content = this.state.contact
      ? this._renderContent()
      : this._renderPlaceholder();
    return <div className="my-message-sidebar">{content}</div>;
  }
}

// Providing container styles tells the app how to constrain
// the column your component is being rendered in. The min and
// max size of the column are chosen automatically based on
// these values.
MyMessageSidebar.containerStyles = {
  order: 0,
  flexShrink: 0
};
