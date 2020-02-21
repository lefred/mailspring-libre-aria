"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mailspring_exports_1 = require("mailspring-exports");
class MyMessageSidebar extends mailspring_exports_1.React.Component {
    // This sidebar component listens to the FocusedContactStore,
    // which gives us access to the Contact object of the currently
    // selected person in the conversation. If you wanted to take
    // the contact and fetch your own data, you'd want to create
    // your own store, so the flow of data would be:
    // FocusedContactStore => Your Store => Your Component
    constructor(props) {
        super(props);
        this._onChange = () => {
            this.setState(this._getStateFromStores());
        };
        this._getStateFromStores = () => {
            return {
                contact: mailspring_exports_1.FocusedContactsStore.focusedContact()
            };
        };
        this.state = this._getStateFromStores();
    }
    componentDidMount() {
        this.unsubscribe = mailspring_exports_1.FocusedContactsStore.listen(this._onChange);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    _renderContent() {
        // Want to include images or other static assets in your components?
        // Reference them using the mailspring:// URL scheme:
        //
        // <RetinaImg
        //    url="mailspring://<<package.name>>/assets/checkmark_templatethis.2x.png"
        //    mode={RetinaImg.Mode.ContentIsMask}/>
        //
        var company = this.state.contact.guessCompanyFromEmail();
        var aria_str = "";
        if (company.toLowerCase() == 'oracle') {
            return (mailspring_exports_1.React.createElement("div", { className: "header", style: { display: 'block', marginTop: 20 } },
                mailspring_exports_1.React.createElement("p", null,
                    mailspring_exports_1.React.createElement("a", { href: `https://people.oracle.com/apex/f?p=8000:HOME::::::#${this.state.contact.email}`, style: { 'text-decoration': 'none' } },
                        mailspring_exports_1.React.createElement("img", { src: "mailspring://aria/assets/oracle.png" }),
                        " View in Aria"))));
        }
        else {
            return ("");
        }
    }
    _renderPlaceholder() {
        return mailspring_exports_1.React.createElement("div", null, " No Data Available ");
    }
    render() {
        const content = this.state.contact
            ? this._renderContent()
            : this._renderPlaceholder();
        return mailspring_exports_1.React.createElement("div", { className: "my-message-sidebar" }, content);
    }
}
MyMessageSidebar.displayName = "MyMessageSidebar";
exports.default = MyMessageSidebar;
// Providing container styles tells the app how to constrain
// the column your component is being rendered in. The min and
// max size of the column are chosen automatically based on
// these values.
MyMessageSidebar.containerStyles = {
    order: 0,
    flexShrink: 0
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbWVzc2FnZS1zaWRlYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL215LW1lc3NhZ2Utc2lkZWJhci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBaUU7QUFHakUsc0JBQXNDLFNBQVEsMEJBQUssQ0FBQyxTQUFTO0lBRzNELDZEQUE2RDtJQUM3RCwrREFBK0Q7SUFDL0QsNkRBQTZEO0lBQzdELDREQUE0RDtJQUM1RCxnREFBZ0Q7SUFFaEQsc0RBQXNEO0lBQ3RELFlBQVksS0FBSztRQUNmLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQVlmLGNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO1FBRUYsd0JBQW1CLEdBQUcsR0FBRyxFQUFFO1lBQ3pCLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLHlDQUFvQixDQUFDLGNBQWMsRUFBRTthQUMvQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBbkJBLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcseUNBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBWUQsY0FBYztRQUNaLG9FQUFvRTtRQUNwRSxxREFBcUQ7UUFDckQsRUFBRTtRQUNGLGFBQWE7UUFDYiw4RUFBOEU7UUFDOUUsMkNBQTJDO1FBQzNDLEVBQUU7UUFDRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO1FBQ3hELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUNqQixJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxRQUFRLEVBQUU7WUFDbkMsT0FBTyxDQUNILGtEQUFLLFNBQVMsRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO2dCQUNqRTtvQkFDRyxnREFBRyxJQUFJLEVBQUUsc0RBQXNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sRUFBRTt3QkFDL0gsa0RBQUssR0FBRyxFQUFDLHFDQUFxQyxHQUFFO3dDQUM1QyxDQUNILENBQ0MsQ0FDVCxDQUFDO1NBQ0w7YUFBTTtZQUNILE9BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUVkO0lBQ0gsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixPQUFPLDRFQUE4QixDQUFDO0lBQ3hDLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM5QixPQUFPLGtEQUFLLFNBQVMsRUFBQyxvQkFBb0IsSUFBRSxPQUFPLENBQU8sQ0FBQztJQUM3RCxDQUFDOztBQW5FTSw0QkFBVyxHQUFHLGtCQUFrQixDQUFDO0FBRDFDLG1DQXFFQztBQUVELDREQUE0RDtBQUM1RCw4REFBOEQ7QUFDOUQsMkRBQTJEO0FBQzNELGdCQUFnQjtBQUNoQixnQkFBZ0IsQ0FBQyxlQUFlLEdBQUc7SUFDakMsS0FBSyxFQUFFLENBQUM7SUFDUixVQUFVLEVBQUUsQ0FBQztDQUNkLENBQUMifQ==