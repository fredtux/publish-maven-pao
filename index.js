import * as core from '@actions/core'
import * as coreCommand from '@actions/core/lib/command'
// import * as path from 'path'


const projectName = core.getInput("project_name", { required: true });
const pomPath = core.getInput("pom_path", { default: "." });


async function run() {
    try {
        await checkout();
    } catch (error) {
        core.setFailed`${error.message}`;
    }
}

async function checkout() {
    const repository = await inputHelper.getInput("repository", {required: True});

    repoUrl = `git@github.com:${repository}.git`;

    console.log(repoUrl);
}


run();