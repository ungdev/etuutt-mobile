# 💻 Contribute

## 👀 Run the app locally

Launch the app bundler :

- yarn start

This will launch a bundler in the console and the navigator. You can from their launch a simulator, or even from your phone with the app "expo", from the app store/ play store

## 📦 Develop a feature

### 1. ✨ Start a feature branch:

be sure to start from `develop` branch :

```bash
$ git checkout develop
```

Than, create the branch :

```bash
$ git checkout -b "feature/name-of-the-feature"
```

### 2. 💻 Start working on your feature

Code, create files, ...

### 3. Commit

Every time you do a small thing for your feature, COMMIT. It is very important you break your code in small parts. It would be easier to review it.

First, select the files you want to add to the commit :

```bash
$ git add name_of_the_file
```

Or easier : go to the git tab in VSCode. You can find it on the left of the editor, just after the loop. You will see all the modified files, with a + next to them when you hover them. Click on + to add the file in the commit.

To commit, use :

```bash
$ git cz
```

(You need commitizen to be installed. If it does not work, try `npx cz`, and if it still fails, juste use git commit -m "your commit message")

This will ask you some questions :

- type of commit : is it a feature, some doc, tests,...
- what file or what's globally inside the commit
- a small description of the commit

The 3 first question will determine the title of the commit

- a longer description of the commit (optional)
- other question you do not have to answer them, just press enter

You now have committed your work!

### 4. 👀 Code Review

1. Rebase your feature branch onto the `develop` branch to ensure it is up-to-date (in case someone did something while you did yours)

   ```bash
   $ git pull --rebase origin develop
   ```

2. Push the code to github :

   ```bash
   $ git push
   ```

3. When pushing, git will give you a like to create a pull request. Create one

4. Ask for a thorough Code Review by a Code Owner

### 5. 📦 Merge your feature back into the `develop` branch

Only when validated by the code owner.

## Go back to [README](../README.md)
