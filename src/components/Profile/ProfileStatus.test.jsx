import ProfileStatusClass from "./ProfileStatusClass";
import renderer from 'react-test-renderer';

const state = {
    editMode: false,
    userStatus: ' '
}
test('test Profile status', () => {
    let component = renderer.create(<ProfileStatusClass userStatus='ok'/>);
    let instance = component.getInstance();
    expect(instance.state.userStatus).toBe('ok');
});
test('show Input for editing when DoubleClick is ', () => {
    let component = renderer.create(<ProfileStatusClass userStatus='ok' />);
    let root = component.root;
    let span = root.findByType('span');
    span.props.onDoubleClick();
    let input = root.findByType('input');
    expect(input).toBeTruthy();
});
test('input don`t need to be shown', ()=>{
    let component = renderer.create(<ProfileStatusClass userStatus='ok' />);
    let root = component.root;
    expect(() => { root.findByType('input')}).toThrow();
});