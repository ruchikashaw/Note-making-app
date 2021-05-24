const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black'
    },
    
    newNoteBtn: {
      width: '100%',
      height: '35px',
      borderBottom: '1px solid black',
      borderRadius: '0px',
      backgroundColor: '#142440',
      color: 'cyan',
      '&:hover': {
        backgroundColor: '#6195ed'
      }
    },
    sidebarContainer: {
      marginTop: '0px',
      width: '300px',
      height: '100%',
      boxSizing: 'border-box',
      float: 'left',
      overflowY: 'scroll',
      overflowX: 'hidden'
    },
    newNoteInput: {
      width: '100%',
      margin: '0px',
      height: '35px',
      outline: 'none',
      border: 'none',
      paddingLeft: '5px',
      '&:focus': {
        outline: '2px solid rgba(81, 203, 238, 1)'
      }
    },
    newNoteSubmitBtn: {
      width: '100%',
      backgroundColor: '#242a57',
      borderRadius: '0px',
      color: 'cyan',
      '&:hover' : {
        backgroundColor: '#6195ed'
      }      
    }
  });
  
  export default styles;
  