function get-menu{
    clear-host
    write-host "welcome to the automated git connector"
    write-host "purpose of this script is to make it easier to commit to github"
}

function get-performcommit{
    get-menu
    $commit_msg = read-host 'What would you like commit message to be?'
    git add .
    git commit -m $commit_msg
    git push -u origin master
}

get-performcommit