# This is a work in progress
This tool might not be good for you now. It's made specifically for my workflow at YouSee. I might improve on this in the future.

# What is this?
We work with a React, reflux and a tiresome folder structure. Since I'm lazy I want to automate this. So I made this cli for generating react components with stores and actions in the proper domain folder and with templates and imports. 

# How do I get it?
`npm install -g lazy-cli`

# How do I use it?
You need to `cd` to a folder (`/FrontendClient/src/project`) with access to `components/` and `flux/` and then type `lazy-cli`. From there you can pick your domain and component name and that's it. :star:

Right now the cli works with our domain structure. If you don't use domain folder just press 'enter' when asked which domain to use. That will create the files in `component/`, `flux/actions` and `flux/stores`.

Be aware that the current import paths are set to the Yousee Sales path.
