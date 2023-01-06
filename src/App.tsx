
import React from 'react';
import ReactDOM from 'react-dom';
// import { CKEditor } from 'ckeditor4-react';
// import { text } from '../src/components/editor/IndexComponents'
import { EditorBody } from './components/editor/EditorBody';
import Newcom from './components/editor/Newcom';

const { useState } = React;

const App = () => {
	return (
		<div>
			{/* <Newcom/> */}
			<EditorBody />
			
		</div>
	)
}
export default App;



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { CKEditor } from 'ckeditor4-react';
// import {text} from '../src/components/editor/IndexComponents'

// const { useState } = React;

// const App = () => {
// 	const [ events, setEvents ] = useState( [] );

// 	const logEvent = ( evt:any ) => {
// 		evt.timestamp = new Intl.DateTimeFormat( 'en', {
// 			hour12: false,
// 			hour: '2-digit',
// 			minute: '2-digit',
// 			second: '2-digit'
// 		} ).format( new Date() );

// 		// setEvents( (events) =>  [ evt, ...events: ]);
// 	}

// 	const clearEvents = () => {
// 		setEvents( [] );1px
// 	}

// 	return (
// 		<div>
// 			<CKEditor
// 				initData={text}
// 				config={{
// 					toolbar: [
// 						[ 'Source' ],
// 						[ 'Styles', 'Format', 'Font', 'FontSize' ],
// 						[ 'Bold', 'Italic' ],
// 						[ 'Undo', 'Redo' ],
// 						[ 'EasyImageUpload' ],
// 						[ 'About' ]
// 					],
// 					extraPlugins: 'easyimage',
// 					removePlugins: 'image',
// 					cloudServices_uploadUrl: 'https://33333.cke-cs.com/easyimage/upload/',
// 					cloudServices_tokenUrl:
// 						'https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt'
// 				}}
// 				onFocus={logEvent}
// 				onBlur={logEvent}
// 				onChange={logEvent}
// 				onSelectionChange={logEvent}
// 			/>

// 		</div>
// 	);
// }

// const EventLog = ( { stream }:any ) => {
// 	return (
// 		<div className="event-log">
// 			<ul className="event-log__events">
// 				{
// 					stream.map( (event:any) => {
// 						return (
// 							<li className="event-log__event">
// 								<Event data={event} />
// 							</li>
// 						)
// 					} )
// 				}
// 			</ul>
// 		</div>
// 	);
// }

// const Event = ( { data: { name, timestamp } }:any ) => {
// 	return (
// 		<>
// 			{timestamp} – {name}
// 		</>
// 	);
// }

// export default App