git --version
git config --global user.name "."
git config --global user.email abc@example.com

aws --version
git config --global credential.helper '!aws codecommit credential-helper $@'
git config --global credential.UseHttpPath true

git clone (repository link created in codecommit)
cd RepoName
git add <file_name>
git commit -m "Changes pushed using cloud9"
git push

git config --global --unset-all user.name
git config --global --unset-all user.email
