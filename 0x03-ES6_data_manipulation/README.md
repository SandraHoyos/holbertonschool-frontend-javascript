<h1>0x03. ES6 data manipulation</h1>
<p><br></p>
<div>
    <p><img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2019/12/6ab7bec4727cb5c91257.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220418T155257Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b9b8cf62aa6ebe14fd816f86b6835724be73097414182c8d677d841a7abcefce" alt=""></p>
    <h2>Resources</h2>
    <p><strong>Read or watch</strong>:</p>
    <ul>
        <li><a href="https://intranet.hbtn.io/rltoken/OlRlkH3JrElTjPXxwcA5hw" target="_blank" title="Array">Array</a></li>
        <li><a href="https://intranet.hbtn.io/rltoken/1oeXGK8qBASQXq7A36QJLw" target="_blank" title="Typed Array">Typed Array</a></li>
        <li><a href="https://intranet.hbtn.io/rltoken/486ELa8RfwDX4pTIvSm3-Q" target="_blank" title="Set Data Structure">Set Data Structure</a></li>
        <li><a href="https://intranet.hbtn.io/rltoken/xWyUFueUL19jzBVMHztA1A" target="_blank" title="Map Data Structure">Map Data Structure</a></li>
        <li><a href="https://intranet.hbtn.io/rltoken/zod1NoGSItfA9We8RrLs1Q" target="_blank" title="WeakMap">WeakMap</a></li>
    </ul>
    <h2>Learning Objectives</h2>
    <p>At the end of this project, you are expected to be able to <a href="https://intranet.hbtn.io/rltoken/O-hNPCEcdrNjmVJZzfsPxQ" target="_blank" title="explain to anyone">explain to anyone</a>, <strong>without the help of Google</strong>:</p>
    <ul>
        <li>How to use map, filter and reduce on arrays</li>
        <li>Typed arrays</li>
        <li>The Set, Map, and Weak link data structures</li>
    </ul>
    <h2>Requirements</h2>
    <ul>
        <li>All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x</li>
        <li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
        <li>All your files should end with a new line</li>
        <li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
        <li>Your code should use the <code>js</code> extension</li>
        <li>Your code will be tested using <code>Jest</code> and the command <code>npm run test</code></li>
        <li>Your code will be verified against lint using ESLint</li>
        <li>Your code needs to pass all the tests and lint. You can verify the entire project running <code>npm run full-test</code></li>
        <li>All of your functions must be exported</li>
    </ul>
    <h2>Setup</h2>
    <h3>Install NodeJS 12.11.x</h3>
    <p>(in your home directory):</p>
    <pre><code>curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
</code></pre>
    <pre><code>$ nodejs -v
v12.11.1
$ npm -v
6.11.3
</code></pre>
    <h3>Install Jest, Babel, and ESLint</h3>
    <p>in your project directory:</p>
    <ul>
        <li>Install Jest using: <code>npm install --save-dev jest</code></li>
        <li>Install Babel using: <code>npm install --save-dev babel-jest @babel/core @babel/preset-env</code></li>
        <li>Install ESLint using: <code>npm install --save-dev eslint</code></li>
    </ul>
    <h2>Configuration files</h2>
    <h3><code>package.json</code></h3>
    <details>
        <summary>Click to show/hide file contents</summary>
        <pre>
</pre>
    </details>
    <h3><code>babel.config.js</code></h3>
    <details>
        <summary>Click to show/hide file contents</summary>
        <pre>
</pre>
    </details>
    <h3><code>.eslintrc.js</code></h3>
    <details>
        <summary>Click to show/hide file contents</summary>
        <pre>
</pre>
    </details>
    <h3>and&hellip;</h3>
    <p>Don&rsquo;t forget to run <code>$ npm install</code> when you have the <code>package.json</code></p>
</div>