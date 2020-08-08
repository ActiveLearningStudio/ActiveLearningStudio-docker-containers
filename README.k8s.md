# Building containers for k8s

### Overview

Kubernetes does not support shared volumes with the host machine (this is logical because most kubernetes clusters are hosted on remote clusters, while docker is used for more lightweight purposes). Instead of using volumes to share code, we add `COPY` statements to the Dockerfiles. In order to allow persistence of data (eg. logs, internal mysql data, etc), K8s has a feature called PersistentVolumes.

### Building images

```make build```

### Setting up Local Kubernetes Cluster

After installing Docker Desktop, enable Kubernetes by clicking "preferences" -> "kubernetes" -> "enable kubernetes" and "Deploy Docker Stack to Kubernetes".

Run `kubectl config use-context docker-desktop`. You should be able to see:
```$ kubectl get po
No resources found.
```
Congratulations! You've got a k8s cluster running on your machine now.

### The `kompose` tool

Install the `kompose` commandline tool via the proper documentation for your operating system. The `kompose` tool is a handy program that helps translate a docker-compose.yml file into a bunch of yaml files that may be applied for kubernetes. The `make kompose-create-yamls` files creates a directory `yamls` and fills it with a bunch of kubernetes yml files that, when applied, are roughly equivalent to the docker-compose.yml file.

To apply a file: do `kubectl apply -f <file>.yml`. To delete the resources created by the file: `kubectl delete -f <file.yml>`.

Note: by default, `kompose` sets `ImagePullPolicy: ""`, which defaults to "Always." Until we configure kubernetes to pull images from our docker hub registry, we must manually edit the deployment.yml files to have "imagePullPolicy: ifNotPresent". This may be done manually or via `sed`.

### Deploying to k8s

To get all of your pods running, do `for $f in yamls/* ; do kubectl apply -f $f; done`. Note: *I'm still working on getting this part working; for some reason, images aren't showing up properly.*


# Next steps

* I need to debug the reason why the k8s pods can't find the images from my docker desktop registry.
* I will need to figure out how to expose the proper services for traffic within the network.
