# File System (FS Module)
FS module directly communicate with operating system rather than the browser.
The common operations on a file are older 
1. File -> right FILE, read FILE, Append FILE
2. folder -> Mkdir/ Md, Rmdir/ rm,readdir
3. file metadata 

All functions are promise, so it must be called with await keyword