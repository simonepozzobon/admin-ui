const fs = require('fs')
const {
    execSync,
    exec
} = require('child_process')



fs.watch('./src', {}, (eventType, filename) => {
    const componentNames = require('./component-names')
    let files = componentNames.map(name => {
        return name + '.vue'
    })

    let counter = 0
    if (files.includes(filename)) {
        if (counter == 0) {
            exec(
                `npm run build`
            )
            console.log('eventType');
        }
        counter++
    }
    // // 

    // 
    // for (let i = 0; i < componentNames.length; i++) {
    //     let name = componentNames[i]
    //     fs.watch('./src/' + name + '.vue', {
    //         encoding: 'buffer'
    //     }, (eventType, filename) => {
    //         console.log(name);
    //     })
    // }

})

function getPath(...args) {
    return path.resolve(__dirname, ...args)
}
