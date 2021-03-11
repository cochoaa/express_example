pwd
echo "Me muevo a app"
cd app
pwd
ls -l

rsync -avz  --delete -e "ssh" app/  node@prueba02.quipucamayoc.unmsm.edu.pe:/opt/deploy/prueba/
ssh node@prueba02.quipucamayoc.unmsm.edu.pe "pm2 reload /opt/deploy/apps.yml --only prueba"