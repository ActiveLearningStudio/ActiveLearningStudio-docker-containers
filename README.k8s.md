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

To get all of your pods running, do `for $f in yamls/* ; do kubectl apply -f $f; done`. Note: three images currently do not deploy properly: goaccess, goaccess_nginx, and mysql.


# TODO's remaining:

* Adding environment variables to the mysql pod. Here's a good start: https://kubernetes.io/docs/concepts/configuration/secret/ (note: I don't have too much experience with this part)
* Exposing services to outside traffic. Here's a good article on opening traffic: https://www.ovh.com/blog/getting-external-traffic-into-kubernetes-clusterip-nodeport-loadbalancer-and-ingress/
  * The question next becomes, do we still need the nginx loadbalancers? We can specify a service as `type: LoadBalancer`, and the k8s daemon will automatically ask the cloudprovider to create a LoadBalancer that distributes traffic among the pods running a service. The problem is that we end up creating one loadbalancer per externally-facing service, which is perfectly fine right now but not ideal when we have 300 or so services.
  * Using a NodePort in production is another strategy, but it requires manually configuring a load balancer to direct traffic at the correct ports on the correct set of nodes.
  * One more alternative is to simply deploy Istio. We would need to discuss this in more detail, but we're about to finish the deployment at REX. Istio has a concept called a "gateway". We define routing rules based on attributes at either Layer 3, 4, or 7, and then the gateway routes traffic to services (or virtual services, which is another great Istio feature) based on the routing rules.
  * *Colt, what's the "Simplest Solution"?* I'm not an expert, but I think the simplest would be for now to just define `type: LoadBalancer` for every external facing service.
* Make sure that every service that needs to send traffic within the cluster to other services is still able to do so. For example, to make a request to the laravel api from the h5p service, I would type `curl http://currikidev-laravel-api/`, and k8s will automatically route the request. Since the traffic never leaves the cluster, we don't need to bother with https.

# Great, so now how do we deploy to a real cluster that's not just docker desktop?
* Three steps:
  * Push docker images to docker hub.
  * Finalize our k8s yaml files (edit based on the TODO's above), and put them on github
  * Deploying is as simple as `for file in *yamls ; do kubectl apply -f $file ; done`. It's cluster-agnostic. The only magic part that we may have to deal with is the DNS (which I've not set up personally, but between me, Leo, and Ali we should be able to figure it out)


