# Building containers for k8s

### Overview

Kubernetes does not support shared volumes with the host machine (this is logical because most kubernetes clusters are hosted on remote clusters, while docker is used for more lightweight purposes). Instead of using volumes to share code, we add `COPY` statements to the Dockerfiles. In order to allow persistence of data (eg. logs, internal mysql data, etc), K8s has a feature called PersistentVolumes.

### Building images

```make build```

### Setting up Local Kubernetes Cluster

After installing Docker Desktop, enable Kubernetes by clicking "preferences" -> "kubernetes" -> "enable kubernetes" (I would leave "Deploy Docker Stack to Kubernetes" unchecked).

Run `kubectl config use-context docker-desktop`. You should be able to see:
```$ kubectl get po
No resources found.
```
Congratulations! You've got a k8s cluster running on your machine now.

### Deploying to k8s

Go to the `eks_deployment` directory and look at the readme therein.

